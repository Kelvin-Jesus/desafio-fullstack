class UsuarioRepository {
    public async findAll() {
        return [];
        return [
            {
                id: 1,
                nome: 'João',
                email: 'joao@gmai.com',
            }
        ];
    }
}

export default new UsuarioRepository();