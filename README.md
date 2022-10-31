## Install ReactStrap
`npm install reactstrap react react-dom`

## Install Bootstrap
`npm install --save bootstrap`

## Import Bootstrap
`import 'bootstrap/dist/css/bootstrap.min.css'` inside `app.js`

## React-Router DOM-6
`npm install react-router-dom@6`

## Axios
`npm install axios`

## React-Toastify
`npm install --save react-toastify` && `import 'react-toastify/dist/ReactToastify.css'` inside `app.js`

## Rich-Text Editor
`npm install jodit-react --save` && `import JoditEditor from 'jodit-react'` inside a component that we need

## Moment in ReactJS
`npm install moment --save` && `import moment from 'moment'` inside a component that we need

## React infinite scroll component 
    `npm install --save react-infinite-scroll-component`
     => https://www.npmjs.com/package/react-infinite-scroll-component

## Free Image Download
`https://www.pexels.com`


### Base url: `http://localhost:8095`
### Signup url: `/api/v1/auth/register`

### Context API steps:
    1. const context = createContext(null);

    2. wrap components in Provider
        <context.Provider value={val}>
            children
        </context.Provider>
    
    3. consume value by using consumer
        <context.Consumer>
            {
                (value) => (
                    <div>
                        {value?.name}
                    </div>
                )
            }
        </context.Consumer>

    4. consume value using useContext hook
       const value = useContext(UserContext)