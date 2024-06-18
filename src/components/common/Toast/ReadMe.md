# Instructions to use ```<ToastBuilder/>```

Toasts are lightweight notifications designed to mimic the push notifications.
as shown in [this figma design](https://www.figma.com/file/EzHwLyhRo61Npn3uxore3o/Meta?node-id=716%3A46877).
## TOAST BUILDER COMPONENT PROPS

| NAME        | TYPE            | DEFAULT       | DESCRIPTION   |
| ----------- | --------------- | --------- | ----------- |
| message     | string |       | Render a message to displayed in the toastBuilder component.     | 
| toasType     | ['success', 'error', 'info'] |       | Render a toast component based on the type it sets toast background.| 
| onClose     | function |       | A Callback fired when the close button is clicked.     | 
| show     | boolean |  true  | Render toast component when true .     | 
| timeInMs     | number |    default( close on click )   | Close the toast after entered time in milliseconds.     | 

## Example for using  `<ToastBuilder/>`

```javascript 
export const TestToastBuilder = () => {
  
    const [showToast, setShowToast] = useState(true);
    const toggleShowToast = () => setShowToas(!showToast);

    return (
        <ToastBuilder
          toastType={'info'}
          show={showToast}
          onClose={toggleShowToast}
          message={'display test toast'}
          timeInMs={1000}
        />
    )
}
 ```        
