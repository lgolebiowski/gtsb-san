export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ee368a9f938de34fc281038',
                  title: 'Sanity Studio',
                  name: 'gtsb-san-studio',
                  apiId: '4813c8f0-fe88-43d6-89b9-62b0bf3d3af0'
                },
                {
                  buildHookId: '5ee368a9d464fd3486ef3733',
                  title: 'Blog Website',
                  name: 'gtsb-san',
                  apiId: 'cc250338-ee1a-49ed-9499-12557332dc27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lgolebiowski/gtsb-san',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gtsb-san.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
