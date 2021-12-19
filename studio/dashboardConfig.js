export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61bfb7ea14b63c5b78ba7d5a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kgx9mqa9',
                  apiId: 'f32aefd6-b7d4-4e73-8dda-ad8327609d7a'
                },
                {
                  buildHookId: '61bfb7ea8450845d9c09a8f4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-863quc7y',
                  apiId: 'f17f6f48-e8a0-4844-99cb-b76a1af689e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mpr32/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-863quc7y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
