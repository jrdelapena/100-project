export default function login(props){
    const login = props.list;

    return (
        <div className="select">
          {menus.map(menu => ( // mapping elements of the menus array
            <h3 key={menu.id} id={menu.name.toLowerCase()}> 
              {menu.name}
            </h3>
          ))}
        </div>
    )
};