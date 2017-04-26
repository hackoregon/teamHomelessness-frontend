const errorLoading = (err) => {
  console.error('Page load failed', err); // eslint-disable-line no-console
};

const loadModule = cb => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {
  return [
    {
      path: '/homeless-population',
      name: 'homelesspopulationpage',
      getComponent(nextState, cb) {
        const renderRoute = loadModule(cb);
        require.ensure([], require => Promise.resolve(require('./components/HomelessPopulation'))
        .then(renderRoute)
        .catch(errorLoading));
      },
    },
    {
      path: '/migration',
      name: 'migrationpage',
      getComponent(nextState, cb) {
        const renderRoute = loadModule(cb);
        require.ensure([], require => Promise.resolve(require('./components/Migration'))
          .then(renderRoute)
          .catch(errorLoading));
      },
    },
    {
      path: '/definition',
      name: 'definitionpage',
      getComponent(nextState, cb) {
        const renderRoute = loadModule(cb);
        require.ensure([], require => Promise.resolve(require('./components/Definition'))
          .then(renderRoute)
          .catch(errorLoading));
      },
    },
    {
      path: '*',
      name: 'notfoundpage',
      getComponent(nextState, cb) {
        const renderRoute = loadModule(cb);
        require.ensure([], require => Promise.resolve(require('./components/NotFoundPage'))
          .then(renderRoute)
          .catch(errorLoading),
        );
      },
    },
  ];
}
