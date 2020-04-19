module.exports = {
  name: 'generate:pages',
  description: 'Create pages inside src/pages',
  run: async toolbox => {
    const {
      parameters,
      createComponent,
      print,
    } = toolbox

    if( parameters.array.length === 0){
      print.error('Inavlid arguments!');

      print.info('Name at least on page. Ex: generate:pages page1 page2 ...');

      return;
    }
    
    for (var i = 0; i < parameters.array.length; i++) {
      const name = parameters.array[i]

      await createComponent('src/pages', name)
    }
    
  },
};