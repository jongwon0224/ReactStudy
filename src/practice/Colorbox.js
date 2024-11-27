

export default function ColorBox(props) {
    
    return (
        <div style={ {width : '100px', height : '100px', backgroundColor : props.color, display : 'inline-block'}}>
            박스
        </div>        
    )
}