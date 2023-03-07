function Video({title,background,views}){
    return (
        <>
            <img
            src="https://picsum.photos/360/240"
            alt="Katherine Johnson"
            />
            <h2 style={{backgroundColor: background}}>{title}</h2>
            <p>{views}</p>
        </>
    )
}
export default Video;