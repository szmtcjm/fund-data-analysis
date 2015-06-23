'use strict';

describe('GeneratorReactWebpackApp', function () {
  var React = require('react/addons');
  var GeneratorReactWebpackApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GeneratorReactWebpackApp = require('components/GeneratorReactWebpackApp.js');
    component = React.createElement(GeneratorReactWebpackApp);
  });

  it('should create a new instance of GeneratorReactWebpackApp', function () {
    expect(component).toBeDefined();
  });
});
