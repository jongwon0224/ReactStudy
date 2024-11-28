

export default function ColorBox(props) {

    return (
        <div className="box"
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: props.bgcolor,
                display: 'inline-block'
            }}
        >
            <button onClick={ props.delBox }>X</button>
        </div>
    )
}