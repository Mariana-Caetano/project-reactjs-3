import './footer.css'

function Footer(props) {
    return(
        <div className="footer">
            <p>{props.footerText}</p> 
        </div>
    )
}

export default Footer