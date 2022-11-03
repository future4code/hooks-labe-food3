
export const Login = () => {
    const navigate = useNavigate();
    // useProtectedPage();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
  
    const handleClick = () => {
      setShowPassword(!showPassword);
    };
  
    const onSubmitForm = (e) => {
      e.preventDefault();
      console.log(email, password);
      const user = {
        email,
        password
      };
      loginApi(user);
    };
  
    const loginApi = async (body) => {
      await axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
          console.log(res.data);
          setEmail("");
          setPassword("");
          localStorage.setItem("token", res.data.token);
          alert(`Bem vindo(a)${res.data.user.name}`);
          goToFeed(navigate);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <S.Main>
        <p>ENTRAR</p>
  
        <S.Form onSubmit={onSubmitForm}>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            type={"email"}
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            type={showPassword ? "password" : "text"}
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClick}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
  
          <S.ButtonS type="submit">ENTRAR</S.ButtonS>
          <Button
            type="submit"
            variant="text"
            onClick={() => goToSignUp(navigate)}
          >
            Não tem uma conta? Cadastre-se!
          </Button>
        </S.Form>
      </S.Main>
    );
  };