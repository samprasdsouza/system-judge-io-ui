# Instructions to use ```<Modal/>```

Moldal shows information into two sections (Top and bottom containers separated by a border) as shown in [this figma design](https://www.figma.com/file/EzHwLyhRo61Npn3uxore3o/Meta?node-id=716%3A46877).
## MODAL COMPONENT PROPS

| NAME        | TYPE            | DEFAULT       | DESCRIPTION   |
| ----------- | --------------- | --------- | ----------- |
| size     | 'sm' , 'lg' , 'xl' |       | Render a large, extra large or small modal. When not provided, the modal is rendered with medium (default) size.     | 
| show       | boolean | false | When true The modal will show itself. | 
| onHide	  | function           |    | A callback fired when the header closeButton or non-static backdrop is clicked. Required if either are specified. | 
| Title       | string | 'Title' | Title of the Modal | 
| subTitle   | string |  | Sub Title of the Modal | 
| footer   | elementType |  | A Component type that provides the modal footer Markup. This is a useful prop when you want to use your own styles and markup to create a custom modal footer component. | 


**Props** - 
1. It takes a children prop which renders the Body of the Modal. 
    * ```javascript
        <ModalBuilder> 
            <div> This is the Body of the Modal</div> 
        </ModalBuilder>
    ```

## Example for using  `<Modal/>`

```javascript 
export const TestModal = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const footer = () => {
        return (
            <div className='d-flex h-100 w-100 mt-2 gap-2 justify-content-between'>
                <p className='text-muted mt-1 '>This is for descriptive modal, you can use it.</p>
   
                <div className='d-flex gap-2'> 
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Select</Button>
                 </div>
            </div>
        )
    }

    const title = () => {
        return (
            <div className='d-inline-block'>
                    <p className='text-sm-start fs-5' style={{marginBottom:'0px'}}>Title</p>
                    <p className='text-sm-start fs-6 fw-normal' style={{marginBottom:'0px'}}> Sub Title</p>
            </div>
        )
    }

    return (
        <ModalBuilder
            show = {show}
            title={title()}
            footer={footer()}
            onHide = {handleClose}
            size={'lg'}
        >
           <div className="d-flex flex-column align-items-center">
        <span> Body of the Modal</span>
        </div>
        </ModalBuilder>
    )
}
 ```        
