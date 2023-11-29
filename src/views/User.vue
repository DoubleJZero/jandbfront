<template>
  
  <div>
    <h1>사용자 목록</h1>
    
    <table>
      <thead>
        <tr>
          <th>아이디</th>
          <th>비밀번호</th>
          <th>이름</th>
          <th>생년월일</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user.userId" v-for="user in userList">
          <td>{{ user.userId }}</td>
          <td>{{ user.userPw }}</td>
          <td>{{ user.userNm }}</td>
          <td>{{ user.userBirth }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      let res = await this.$callAPI("/user-service/list","get",{});
      
      this.userList = res.data;
    },
  }
}
</script>