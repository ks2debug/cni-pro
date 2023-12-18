/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, toast as toastToastify } from 'react-toastify';
import { compose, bindActionCreators } from '@reduxjs/toolkit';
import { Helmet } from 'react-helmet';
import { isEmpty, isNull, isUndefined } from 'lodash';
import { useRendersCount } from 'react-use';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import classNames from 'classnames';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { RiDragDropFill } from 'react-icons/ri';
import { IoMdCloseCircle } from 'react-icons/io';
import styles from './assignment-two.module.scss';
import { AddLoaderHOC } from '../../../hoc';
import { useCustomDispatchAction } from '../../../customHooks';
import { DataModelNavigationBar } from '../../organisms/NavigationBar/DataModelNavigationBar';
import { Constants, Images, Utils } from '../../../utils';
import assignmentTwoData1 from '../../../utils/data-json/assignmentTwoData1.json';
import assignmentTwoData2 from '../../../utils/data-json/assignmentTwoData2.json';

const AssignmentTwo = (props) => {
  const { setIsLoadingState, setLoadingMessageState } = props;
  const location = useLocation();

  const { action_common_top_loading_bar_progress, action_navigation_bar_data } = useCustomDispatchAction();

  const rendersCount = useRendersCount();

  const [selectedState, setSelectedState] = useState(null);
  const arrayStates = assignmentTwoData1;

  const [isShowRightDrawer, setIsShowRightDrawer] = useState(false);
  const [isShowBottomDrawer, setIsShowBottomDrawer] = useState(false);

  const [selectedNames, setSelectedNames] = useState([]);
  const arrayName = assignmentTwoData2;

  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      estimated_weight: '',
      lifecycle: '',
      state: '',
    },
    // resolver: yupResolver(),
  });

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => {
      addSelectedName(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  useEffect(() => {
    action_navigation_bar_data(
      new DataModelNavigationBar({
        currentPageName: Utils.getComponentNameInLowerCase_useLocation(location),
        title: 'Assignment Two Page',
      }),
    );
    action_common_top_loading_bar_progress(Utils.getRandomNumberInRange(10, 30));

    action_common_top_loading_bar_progress(100);

    return () => {};
  }, []);

  const onSubmitForm = async (data) => {
    console.log('🚀 ~ file: AssignmentTwo.jsx:72 ~ onSubmitForm ~ data:', data);

    // const dataTemp = {...data, data.description = data.description.replace(/\n/g, ' ')}
    const dataTemp = { ...data, description: data.description.replace(/\n/g, ' ') };
    console.log('🚀 ~ file: AssignmentTwo.jsx:76 ~ onSubmitForm ~ dataTemp:', dataTemp);

    // console.log('🚀 ~ file: Signup.jsx:60 ~ onSubmitForm ~ data:', data.description);
    // console.log('🚀 ~ file: Signup.jsx:60 ~ onSubmitForm ~ data:', data.description.replace(/\n/g, ' '));

    action_common_top_loading_bar_progress(Utils.getRandomNumberInRange(10, 30));
    // toastHot.success('Signup successful');
    toast.success(JSON.stringify(dataTemp));
    action_common_top_loading_bar_progress(100);
  };

  const addSelectedName = (id) => {
    const arrrayNameFiltered = arrayName.filter((value, index, array) => id === value.id);
    // setSelectedNames((board) => [...board, arrrayNameFiltered[0]]);
    setSelectedNames((board) => [arrrayNameFiltered[0]]);
  };

  function NameDragging({ isInput, id, name, isLast }) {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'image',
      item: { id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    if (isDragging) {
      setShowModal(false);
    }

    if (isInput) {
      return <div className="">{name}</div>;
    }

    return (
      <div ref={drag}>
        <div className="">{name}</div>
        {!isLast && <hr className="my-1" />}
      </div>
    );
  }

  return (
    <div className="uti-container vh-100">
      <Helmet>
        <title>Assignment Two</title>
        <meta name="description" content="Description for assignment two page" />
      </Helmet>

      <div className="d-flex flex-row w-100 vh-100">
        <div className="w-100">
          <div className="d-flex justify-content-end me-2" style={{ gap: '5px' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setIsShowRightDrawer((prevState) => !prevState);
              }}
            >
              I
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setIsShowBottomDrawer((prevState) => !prevState);
              }}
            >
              R
            </button>
          </div>
          <div className="col-10 col-md-8 mx-auto">
            <form
              className="w-100 text-start"
              id="form_name_description_"
              onSubmit={handleSubmit(onSubmitForm)}
              onChange={(event) => {
                // console.log('🚀 ~ file: Signup.jsx:102 ~ Signup ~ event:', event);
              }}
              noValidate
            >
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <div className="d-flex w-100">
                <div className="d-flex align-items-center flex-fill" style={{ height: '38px', border: '1px solid #dee2e6', borderRadius: '5px', paddingLeft: '10px' }} ref={drop}>
                  {!isNull(selectedNames) && !isUndefined(selectedNames) && !isEmpty(selectedNames) ? (
                    selectedNames.map((value, index, array) => {
                      return <NameDragging isInput id={value.id} name={value.name} />;
                    })
                  ) : (
                    <p className="my-auto text-secondary">Please choose name</p>
                  )}
                </div>

                <RiDragDropFill
                  className="ms-2 my-auto"
                  size={30}
                  onClick={() => {
                    setShowModal(true);
                  }}
                />
              </div>

              <label className={`${styles.label} form-label`} htmlFor="description">
                Description
              </label>
              <textarea className="form-control" type="text" name="description" id="description" placeholder="Please enter description" {...register('description')} />

              <div className="row">
                <div className="col-md-5">
                  <label className={`${styles.label} form-label`} htmlFor="estimated_weight">
                    Estimated weight
                  </label>
                  <input className="form-control" type="text" name="estimated_weight" id="estimated_weight" placeholder="Please enter weight" {...register('estimated_weight')} />
                </div>
                <div className="col-md-7">
                  <label className={`${styles.label} form-label`} htmlFor="lifecycle">
                    Lifecycle
                  </label>
                  <input className="form-control" type="text" name="lifecycle" id="lifecycle" placeholder="Please enter Lifecycle" {...register('lifecycle')} />
                </div>
              </div>

              <label className={`${styles.label} form-label`} htmlFor="state">
                State
              </label>
              <Select
                className="form-control p-0 border-0"
                name="state"
                id="state"
                placeholder="Please select state"
                defaultValue={selectedState}
                onChange={setSelectedState}
                options={arrayStates}
                // {...register('state')}
              />

              <button className="btn btn-primary mt-4 w-50 d-flex justify-content-center mx-auto" type="submit">
                Signup
              </button>
            </form>
          </div>

          <div className={classNames(isShowBottomDrawer ? 'd-block ' : 'd-none', 'd-flex flex-column align-items-center bg-secondary-subtle w-100 mt-3')} style={{ paddingBottom: '50px' }}>
            <div className="mx-auto my-2">
              <strong>Relation pane</strong>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              {['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 'Pineapple', 'Watermelon', 'Grapes', 'Kiwi', 'Avocado', 'Peach', 'Blueberry', 'Raspberry', 'Papaya', 'Pear'].map((value, index, array) => {
                return <div className="card m-1 px-3">{value}</div>;
              })}
            </div>
          </div>
        </div>
        <div className={classNames(isShowRightDrawer ? 'd-block ' : 'd-none', 'd-flex flex-column align-items-center bg-info-subtle h-100 ')} style={{ width: '250px' }}>
          <div className="mx-auto my-2">
            <strong>Informatation pane</strong>
          </div>
          <div className="d-flex flex-wrap">
            {['Gir', 'Sahiwal', 'Red Sindhi', 'Tharparkar', 'Kankrej (Guzerat)', 'Deoni', 'Ongole (Nellore)', 'Amrit Mahal'].map((value, index, array) => {
              return <div className="card m-1 px-3">{value}</div>;
            })}
          </div>
        </div>
      </div>
      <div>
        {showModal && <div className={styles.backdrop} />}
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-hidden={!showModal}>
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Name drag and drop</h5>
                <IoMdCloseCircle
                  size={20}
                  onClick={() => {
                    setShowModal(false);
                  }}
                />
              </div>
              <div className="modal-body">
                <div className="w-100">
                  {arrayName.map((value, index, array) => {
                    return <NameDragging isInput={false} id={value.id} name={value.name} isLast={index === array.length - 1} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedAssignmentTwo = compose(AddLoaderHOC(''))(AssignmentTwo);

export default EnhancedAssignmentTwo;
