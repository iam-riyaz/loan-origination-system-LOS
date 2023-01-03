'use strict';

const utilities = require('../../../utilities');
const shared = utilities.views.shared;
const formElements = shared.props.formElements.formElements;
const cardprops = shared.props.cardprops;
const styles = utilities.views.constants.styles;
const plainHeaderTitle = utilities.views.shared.component.layoutComponents.plainHeaderTitle;
const formGlobalButtonBar = utilities.views.shared.component.globalButtonBar.formGlobalButtonBar;
const mlTabs = utilities.views.ml.components.mlTabs;
const mlProcessingTabs = utilities.views.ml.components.mlProcessingTabs;
let randomKey = Math.random;

module.exports = {
  'containers': {
    [ '/ml/processing/individual' ]: {
      layout: {
        component: 'div',
        props: {
          style: styles.pageContainer,
        },
        asyncprops: {
          _children: [ 'pagedata', 'layout' ],
        }
        // children: [
        //   mlTabs('processing/individual'),
        //   plainHeaderTitle({
        //     title: [ {
        //       component: 'span',
        //       children: 'Decision Processing',
        //     }, ],
        //     subtitle: 'Use your machine learning model to make accurate decisions',
        //   }),
        //   mlProcessingTabs('individual'),
        //   {
        //     component: 'Container',
        //     props: {
        //       className: 'simulation',
        //     },
        //     asyncprops: {
        //       _children: [ 'pagedata', 'pageLayout', ],
        //     },
        //   }, ],
      },
      'resources': {
        casedata: '/ml/api/individual/cases?format=json&pagination=mlcases',
        [ 'pagedata' ]: '/ml/api/individual/run?format=json&pagination=mlcases&type=ml',
        checkdata: {
          url: '/auth/run_checks',
          settings: {
            onSuccess: [ 'func:window.redirect', ],
            onError: [ 'func:this.props.logoutUser', 'func:window.redirect', ],
            blocking: true,
            renderOnError: false,
          },
        },
      },
      'callbacks': [ 'func:window.globalBarSaveBtn', 'func:window.setHeaders', ],
      pageData: {
        title: 'DigiFi | Machine Learning',
        navLabel: 'Machine Learning',
      },
      'onFinish': 'render',
    },
  },
};
