# Instructions to use ```<ErrorModal/>```

ErrorModal provide a Modal with button options to display error Icon and cancel button. as shown in [this figma design](https://www.figma.com/file/EzHwLyhRo61Npn3uxore3o/Meta?node-id=716%3A46877).
## ERRORMODAL COMPONENT PROPS

| NAME        | TYPE            | DEFAULT       | DESCRIPTION   |
| ----------- | --------------- | --------- | ----------- |
 
| message     | string |       | Message to be displayed on delete confirmation.     | 
| showModal     | boolean |   false   | control the visibility of the Modal.     | 
| onOk     | function  |       | A callback fired when the user clicks on cancel button.    |


## Example for using  `<ErrorModal/>`

```javascript 
export const TestErrorModal = () => {
    
    const [showModal, setShowModal] = useState(true)

    const handleClickOnErrorModal = () => {
        setShowModal(false)
        // close event
    }

    return (
        <ErrorModal
        showModal={showErrorModal}
        onOk={handleClickOnErrorModal}
        message={
          <>
            Oh !  An error occurred while attempting to publish . Please try again !!
          </>
        }
      />
    )
}
 ```        
