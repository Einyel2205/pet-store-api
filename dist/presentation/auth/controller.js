"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const domain_1 = require("./../../domain");
class AuthController {
    constructor(authRepository) {
        this.authRepository = authRepository;
        this.registerUser = (req, res) => {
            const [error, registerUserDto] = domain_1.RegisterUserDto.create(req.body);
            if (error) {
                return res.status(400).json({ error });
            }
            this.authRepository.register(registerUserDto)
                .then(user => res.json(user))
                .catch(error => res.status(500).json(error));
        };
        this.loginUser = (req, res) => {
            res.json('login Controller');
        };
    }
}
exports.AuthController = AuthController;
