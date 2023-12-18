// first HOC
import React, { useEffect, useState } from 'react';
import { Utils } from '../utils';
import { Loader } from '../components/atoms';

const AddLoaderHOC = (data1) => (OriginalComponent) => {
  const NewAddLoaderHOC = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState();

    useEffect(() => {
      Utils.setScrolling_Enable_Desable(isLoading, document);
    }, [isLoading]);

    const update_isLoading_state = (updateIsLoading) => {
      setIsLoading(updateIsLoading);
    };

    const update_loadingMessage_state = (updateLoadingMessage) => {
      setLoadingMessage(updateLoadingMessage);
    };

    return (
      <>
        <OriginalComponent setIsLoadingState={update_isLoading_state} setLoadingMessageState={update_loadingMessage_state} {...props} />
        {isLoading && <Loader loadingMessage={loadingMessage} />}
      </>
    );
  };

  NewAddLoaderHOC.displayName = `AddLoaderHOC(${OriginalComponent.displayName || Utils.getComponentName(OriginalComponent) || 'Component'})`;

  return NewAddLoaderHOC;
};

export default AddLoaderHOC;
