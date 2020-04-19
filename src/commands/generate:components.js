module.exports = {
  name: 'generate:components',
  description: 'Create components inside src/components',
  run: async toolbox => {
    const {
      parameters,
      createComponent,
    } = toolbox

    if( parameters.array.length === 0){
      print.error('Inavlid arguments!');

      print.info('Name at least on component. Ex: generate:components component1 component2 ...');

      return;
    }

    for (var i = 0; i < parameters.array.length; i++) {
      const name = parameters.array[i]

      await createComponent('src/components', name)
    }
  },
};