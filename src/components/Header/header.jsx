import s from './index.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';
import { CardContext } from '../../context/cardContext';
import { ReactComponent as FavoriteIcon } from './img/favorites.svg';

function Header({ children, onUpdateUser }) {

  const { user: currentUser } = useContext(UserContext);
  const { favorites } = useContext(CardContext);
  return (
    <header className={cn(s.header, 'cover')}>
      <div className="container">
        <div className={s.header__wrapper}>
          {children}

          <div className={cn(s.userInfoContainer)}>
            {currentUser?.email && <span>{currentUser?.email}</span>}
            {currentUser?.name && <span>{currentUser?.name}: {currentUser?.about}</span>}
          </div>

          <div className={s.iconsMenu}>
            <Link className={s.favoritesLink} to={{ pathname: "/favorites", state: 'sfsdfsdf' }}>
              <FavoriteIcon />
              {favorites.length !== 0 && <span className={s.iconBubble}>{favorites.length}</span>}
            </Link>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;
