# Table/ List Feature Module using Ngrx

## Demo URL
https://clickup-mini-project.web.app/


## Drag and Drop functionality ( Column and Row )
![dragdrop](https://user-images.githubusercontent.com/47912011/126905625-8f70b8e5-362d-4b2d-a6b3-9a2a71e66058.gif)
 
## Sort by column
![sortbycolumn](https://user-images.githubusercontent.com/47912011/126905637-54f048c6-2263-4d10-9b27-09727a5a6e18.gif)

## Tooltip directive
![directive-tooltip](https://user-images.githubusercontent.com/47912011/126905639-1cb5fca4-7abf-4b94-bca3-24283a031ff0.gif)

##Search feature (by username)
![searchbyusername](https://user-images.githubusercontent.com/47912011/127141672-7921c2a2-77f2-4fa9-a81a-845319f6bd5d.gif)


## Packages used
- @ngrx/store
- @ngrx/effects
- @ngrx/store-devtools

## Folder structure:

![image](https://user-images.githubusercontent.com/47912011/126484680-b35f18bc-6fbe-4a9e-a446-9443c74f016d.png)

##List Module: 

•	Used Presentation and Container components to separate dummy and smart components. 
**Containers** folder contains all the container components
**Components** folder contains all dummy components

![image](https://user-images.githubusercontent.com/47912011/126484698-b49c2d3e-ce30-4742-a676-c5e182e4047e.png)

•	Created a separate feature module which is lazy loaded when accessing /list route (which is now the default route) 


•	Custom directory for tooltip - structural directive **src/app/list/directives/tooltip.directive.ts**


•	Store module is used as data layer for users list displayed on table/ list. Search action triggers an effect which updates the state with search result.


•	Done some styling to make the feature module presentable. ( can be improved )

