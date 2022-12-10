package cyou.ted2.gymtracker.backend.models;

import org.springframework.security.core.userdetails.UserDetails;

public class IAmUser {
    private User user;

    public IAmUser(User user) {
        this.user = user;
    }

    public String getName(){
        return user.getName();
    }

    public String getUsername(){
        return user.getUsername();
    }


}
