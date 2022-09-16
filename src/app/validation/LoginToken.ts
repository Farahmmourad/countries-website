export interface LoginToken{
    Login : {
        AccessToken : string;
        ExpiresIn : number;
        NotBeforePolicy :number;
        RefreshExpiresIn :number;
        RefreshToken : string;
        Scope : string;
        SessionState : string;
        TokenType : string;
    }
}