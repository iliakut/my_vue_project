<template>
  <div>
    <h1>Добавить пользователя</h1>
    <user-form
      :user="user"/>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

const userTemplate = {
  id: 0,
  isActive: false,
  balance: '',
  picture: '',
  age: 0,
  accessLevel: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}

export default {
  name: 'AddUser',
  components: {
    'user-form': UserForm
  },
  data: function() {
    return {
      user: userTemplate
    }
  }
}
</script>
