# page-overlay-selector

An component overlay show over a page, you can select dom elements and label them as either named text/variable or page/section. Data is then posted to an API. 
Interface:
mouse over any element 
element.toggleClass highlight, selectable 
on click selectable 
show => modal-form (
   save (selected) as: (
          option = "Text/Variable" then next =: form (var_name:string) 
          option = "Section/include" then next : form( include_name:string)




## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/page-overlay-selector.git
cd page-overlay-selector
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
