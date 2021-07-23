# Table/ List Feature Module using Ngrx

## Demo URL
https://clickup-mini-project.web.app/


## Drag and Drop functionality
![dragdrop](https://user-images.githubusercontent.com/47912011/126484559-a524da4a-8421-4a7e-9b0d-152f5830ef64.gif)
 
## Sort by column
![sortbycolumn](https://user-images.githubusercontent.com/47912011/126484598-a3bf43b1-105c-4a0e-b5b2-5ce852cc31b3.gif)

## Tooltip directive
![directive-tooltip](https://user-images.githubusercontent.com/47912011/126484616-84779316-7536-4f3b-875b-4886ad2adc55.gif) 

**Search feature (by username) **
![searchbyusername](https://user-images.githubusercontent.com/47912011/126484642-e1910a5f-631d-4b04-b0ee-7d1edd06c299.gif)




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

