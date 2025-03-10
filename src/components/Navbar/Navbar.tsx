import * as S from "./NavbarStyle";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../reducer/userSlice";
import { RootState } from "../../reducer/rootReducer";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { DELETE_TOKEN } from "../../reducer/tokenSlice";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleLogout = () => {
      axios.get("http://localhost:8080/auth/logout")
      .then(res => {
        if(res.data.success){
          navigate('/main');
          dispatch(clearUser());
          dispatch(DELETE_TOKEN());
        }else {
          console.log("logout failed", res.data);
        }
      })
    }
  return (
    <>
      <S.Header>
        <S.Nav>
          <S.Ul>
            <S.Div>
              <S.Li>
                <S.StyledLink to="/chatbot">Chatbot</S.StyledLink>
              </S.Li>
              <S.Li>
                <S.StyledLink to="/community">COMMUNITY</S.StyledLink>
              </S.Li>
            </S.Div>
            <S.Div>
              <S.Logo>
                <S.StyledLink to="/main">ZIP COOK</S.StyledLink>
              </S.Logo>
            </S.Div>
            <S.Div>
              {user.isLogin ? (
                <>
                  <S.Li>
                    <button onClick={handleLogout}>LOGOUT</button>
                  </S.Li>
                  <S.Li>
                    <S.StyledLink to="/mypage">MY PAGE</S.StyledLink>
                  </S.Li>
                </>
              ) : (
                <>
                  <S.Li>
                    <S.StyledLink to="/login">LOGIN</S.StyledLink>
                  </S.Li>
                  <S.Li>
                    <S.StyledLink to="/join">JOIN</S.StyledLink>
                  </S.Li>
                </>
              )}
            </S.Div>
          </S.Ul>
        </S.Nav>
      </S.Header>
    </>
  );
};

export default Navbar;
