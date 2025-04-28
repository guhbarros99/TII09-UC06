class BancoDeDados {
      static buscarTodos(prefixo) {
      const lista = [];
  
      for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave.startsWith(prefixo)) {
          const dados = JSON.parse(localStorage.getItem(chave));
          lista.push(dados);
        }
      }
  
      return lista;
    }
  
    static buscarPorId(id) {
      const item = localStorage.getItem(id);
      if (item) {
        return JSON.parse(item);
      }
      return null;
    }
    static excluir(id) {
      localStorage.removeItem(id);
  }
  
    static desativar(id) {
      const item = JSON.parse(localStorage.getItem(id));
      if (item) {
        item.ativo = false;
        localStorage.setItem(id, JSON.stringify(item));
      }
    }
  }
  