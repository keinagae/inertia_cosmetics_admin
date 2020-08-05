<template>
  <div class="app-container">
    <div class="inbox-view card-view">
      <el-tabs :tab-position="tab_position" style="min-height: 200px;" class="inbox-tabs">
        <el-tab-pane v-for="(msg, index) in msgs" :key="index">
          <span slot="label" class="inbox-tab">
            <div class="inbox-tab__head">
              <svg-icon icon-class="bell" class="inbox-tab__icon" />
              <span class="inbox-tab__name" v-html="msg.name">Jason Holmes</span>
              <time class="inbox-tab__time" v-html="msg.time"></time>
            </div>

            <div class="inbox-tab__subject" v-html="msg.subject">Hey How are you?</div>

            <div
              class="inbox-tab__msg"
              v-html="msg.tabMsg"
            >Cntrary to popular belief, Lorem Ipsum...</div>
          </span>

          <div class="msg">
            <div class="msg__content" v-html="msg.message"></div>
            <div class="msg__reply">
              <el-button type="primary" class="btn-primary">Reply</el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    let width = $( window ).width();
    if(width <= 650) {
      this.tab_position = 'top';
    }
  },
  data() {
    return {
      tab_position: 'left',
      msgs: [
        {
          name: 'Jason Holmes',
          time: '8:26 am',
          subject: 'Hey How are you?',
          tabMsg: 'Cntrary to popular belief, Lorem Ipsum...',
          message:
            '<p>Hi John Snow,</p> </br> <p>A random name generator is useful for anyone who needs, well, a list of random names! Uses include authors who want a realistic set of names they can put into fiction, roleplayers who want realistic names for their characters and programmers who want plausible looking names for test data.</p> <p>You can choose from a database of current names, or the 1881 census if you want a historical feel. And you can select either male, female or mixed names. Some names, of course, are unisex and can show up in any list. The list defaults to 50 names, but you can go up to 200. Any more than that thrashes the server too much.</p>',
        },
        {
          name: 'Jason Holmes',
          time: '8:26 am',
          subject: 'Hey How are you?',
          tabMsg: 'Cntrary to popular belief, Lorem Ipsum...',
          message:
            '<p>Hi John Snow,</p> </br> <p>A random name generator is useful for anyone who needs, well, a list of random names! Uses include authors who want a realistic set of names they can put into fiction, roleplayers who want realistic names for their characters and programmers who want plausible looking names for test data.</p> <p>You can choose from a database of current names, or the 1881 census if you want a historical feel. And you can select either male, female or mixed names. Some names, of course, are unisex and can show up in any list. The list defaults to 50 names, but you can go up to 200. Any more than that thrashes the server too much.</p>',
        },
        {
          name: 'Jason Holmes',
          time: '8:26 am',
          subject: 'Hey How are you?',
          tabMsg: 'Cntrary to popular belief, Lorem Ipsum...',
          message:
            '<p>Hi John Snow,</p> </br> <p>A random name generator is useful for anyone who needs, well, a list of random names! Uses include authors who want a realistic set of names they can put into fiction, roleplayers who want realistic names for their characters and programmers who want plausible looking names for test data.</p> <p>You can choose from a database of current names, or the 1881 census if you want a historical feel. And you can select either male, female or mixed names. Some names, of course, are unisex and can show up in any list. The list defaults to 50 names, but you can go up to 200. Any more than that thrashes the server too much.</p>',
        },
        {
          name: 'Jason Holmes',
          time: '8:26 am',
          subject: 'Hey How are you?',
          tabMsg: 'Cntrary to popular belief, Lorem Ipsum...',
          message:
            '<p>Hi John Snow,</p> </br> <p>A random name generator is useful for anyone who needs, well, a list of random names! Uses include authors who want a realistic set of names they can put into fiction, roleplayers who want realistic names for their characters and programmers who want plausible looking names for test data.</p> <p>You can choose from a database of current names, or the 1881 census if you want a historical feel. And you can select either male, female or mixed names. Some names, of course, are unisex and can show up in any list. The list defaults to 50 names, but you can go up to 200. Any more than that thrashes the server too much.</p>',
        },
        {
          name: 'Jason Holmes',
          time: '8:26 am',
          subject: 'Hey How are you?',
          tabMsg: 'Cntrary to popular belief, Lorem Ipsum...',
          message:
            '<p>Hi John Snow,</p> </br> <p>A random name generator is useful for anyone who needs, well, a list of random names! Uses include authors who want a realistic set of names they can put into fiction, roleplayers who want realistic names for their characters and programmers who want plausible looking names for test data.</p> <p>You can choose from a database of current names, or the 1881 census if you want a historical feel. And you can select either male, female or mixed names. Some names, of course, are unisex and can show up in any list. The list defaults to 50 names, but you can go up to 200. Any more than that thrashes the server too much.</p>',
        },
      ],
    };
  },
  methods: {
    pageTitle() {
      return this.$route.meta.pageTitle || '';
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
.el-input__inner {
  width: 100%;
}
</style>

