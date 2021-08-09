<template>
  <table class="users-table table-bordered">
    <thead>
      <tr>
        <th>first name</th>
        <th>last name</th>
        <th>email</th>
        <th>avatar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td v-text="user.first_name"></td>
        <td v-text="user.last_name"></td>
        <td v-text="user.email"></td>
        <td>
          <img :src="user.avatar" alt="" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'HomeUsersPage',
  inject: ['backendService'],
  data: () => ({
    users: [],
  }),
  mounted() {
    this.backendService.getUsers()
      .then(response => this.users = response.data)
  },
}
</script>

<style lang="scss" scoped>
  table.users-table {
    width: 100%;
    color: #212529;
    vertical-align: top;
    border-color: #dee2e6;
    border-style: solid;
    border-collapse: collapse;

    > :not(caption) > * > * {
      padding: .5rem .5rem;
      border-bottom-width: 1px;
      border-style: solid;
      text-align: start;
    }

    > tbody {
      vertical-align: inherit;
    }

    > thead {
      vertical-align: bottom;
      background-color: #ced4da;
    }

    > :not(:last-child) > :last-child > * {
      border-bottom-color: #dee2e6;
    }

    > :not(caption) > * {
      border-width: 1px;

      > * {
        border-width: 1px;
      }
    }

    tbody > tr:nth-of-type(2n) {
      background-color: #dee2e6;
    }

    img {
      max-width: 40px;
    }
  }
</style>