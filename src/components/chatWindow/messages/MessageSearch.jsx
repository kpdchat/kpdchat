export default function MessageSearch() {
    return (
        <div className="messages__search">
            <form className='search-form'>
                <input placeholder='Пошук...'></input>
            </form>
            <div className="messages__info menu-kebab"></div>
        </div>
    )
}
