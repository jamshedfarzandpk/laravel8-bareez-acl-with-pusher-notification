

export default class UserService {


    getUsers() {

        return fetch('/api/users').then(res => res.json())
                .then(d => d.data);
	}
}
