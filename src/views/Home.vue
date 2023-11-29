<template>
  <div>
    <h1>사용자 등록</h1>

    사용자 아이디: 
    <input type="text" v-model="userId" />
    <br/>
    사용자 비밀번호: 
    <input type="text" v-model="userPw" />
    <br/>
    사용자 이름: 
    <input type="text" v-model="userNm" />
    <br/>
    사용자 생년월일: 
    <input type="text" v-model="userBirth" />
    <br/>
    <button @click="save()">저장</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: null,
      userPw: null,
      userNm: null,
      userBirth: null
    }
  },
  methods: {
    async save(){
      let data = {};
      data.userId = this.userId;
      data.userPw = this.userPw;
      data.userNm = this.userNm;
      data.userBirth = this.userBirth;

      await this.$callAPI("/user-service/save","post",data)
    }
  }
}
</script>