
const App = {
  data() {
    return {
      servers: [],
      name: ''
    }
  },
  methods: {
    // запрос с фронта до экспресса
    async createServer() {
      const data = {
        name: this.name,
        status: 'created'
      }
      const res = await fetch('/api/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      this.name = '';
      const newServer = await res.json()
      this.servers.push(newServer)
      console.log(newServer);
    },
    async remove(id) {
      // запускаем запрос удаления на сервере и ждем пока выполнится там
     const wh = await fetch(`/api/server/${id}`, {method: 'DELETE'})
      this.servers = this.servers.filter(s => s.id !== id)
     const whh = await wh.json()
     console.log(whh)
    }
  },
  async mounted() {
    const res = await fetch('/api/server')
    this.servers = await res.json()
  }
}

Vue.createApp(App).mount('#app')