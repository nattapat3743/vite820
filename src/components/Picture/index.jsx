const Picture = ({ picture, title }) => {
    return(
        <div>
            <img src={picture} all={title} className="w-5/6 rounded-md border-2" />
        </div>
    )
}

export default Picture;