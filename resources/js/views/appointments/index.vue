<template>
  <div class="app-container">
    <section class="section-appointment">
      <el-row :gutter="20">
        <el-col :sm="10">
          <vc-calendar :attributes="attributes" color="red" is-expanded></vc-calendar>
        </el-col>
        <el-col :sm="14">
          <div class="appointment-cards">
            <el-row v-for="(appointment, index) in appointments" :key="index">
              <el-col :xs="24">
                <el-card class="appointment-card">
                  <el-row :gutter="20">
                    <el-col :xs="24" :sm="7" :lg="5" class="text-center mb-0">
                      <div class="appointment-card__img-box">
                        <el-image :src="appointment.thumbnail" fit="cover"></el-image>
                      </div>
                    </el-col>
                    <el-col :xs="24" :sm="17" :lg="19" class="mb-0">
                      <div class="appointment-card__appointment-details">
                        <h3 class="appointment-card__date" v-html="appointment.date"></h3>
                        <p class="appointment-card__name" v-html="appointment.name"></p>
                        <h3 class="appointment-card__user_name" v-html="appointment.user_name"></h3>
                        <p class="appointment-card__description" v-html="appointment.description"></p>
                        <a :href="appointment.chat_link">
                          <el-button type="success" class="btn appointment-card__chat-btn">Chat</el-button>
                        </a>
                        <a :href="appointment.reschedule_link">
                          <el-button
                            type="primary"
                            class="btn appointment-card__reschedule-btn btn-primary"
                          >Reschedule</el-button>
                        </a>
                        <a :href="appointment.cancel_link">
                          <el-button type="danger" class="btn appointment-card__cancel-btn">Cancel</el-button>
                        </a>
                      </div>
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attributes: [
        {
          key: 'today',
          highlight: 'pink',
          dates: new Date(),
        },
        {
          dot: 'red',
          dates: [
            new Date('Tue, 18 Jun 2020'),
            new Date('Tue, 20 Jun 2020'),
            new Date('Tue, 21 Jun 2020'),
            new Date('Tue, 25 Jun 2020'),
          ],
        },
        {
          dot: 'orange',
          dates: [new Date('Tue, 18 Jun 2020'), new Date('Tue, 21 Jun 2020')],
        },
      ],

      appointments: [
        {
          date: 'Tue, 18 Mar at 04:30 PM',
          description:
            'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
          name: 'Beard Trim',
          user_name: 'Russell Robbins',
          thumbnail: '/images/members/avatar-1.png',
          chat_link: '#',
          reschedule_link: '#',
          cancel_link: '#',
        },
        {
          date: 'Tue, 18 Mar at 04:30 PM',
          description:
            'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
          name: 'Beard Trim',
          user_name: 'Russell Robbins',
          thumbnail: '/images/members/avatar-2.png',
          chat_link: '#',
          reschedule_link: '#',
          cancel_link: '#',
        },
        {
          date: 'Tue, 18 Mar at 04:30 PM',
          description:
            'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
          name: 'Beard Trim',
          user_name: 'Russell Robbins',
          thumbnail: '/images/members/avatar-1.png',
          chat_link: '#',
          reschedule_link: '#',
          cancel_link: '#',
        },
        {
          date: 'Tue, 18 Mar at 04:30 PM',
          description:
            'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
          name: 'Beard Trim',
          user_name: 'Russell Robbins',
          thumbnail: '/images/members/avatar-2.png',
          chat_link: '#',
          reschedule_link: '#',
          cancel_link: '#',
        },
        {
          date: 'Tue, 18 Mar at 04:30 PM',
          description:
            'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
          name: 'Beard Trim',
          user_name: 'Russell Robbins',
          thumbnail: '/images/members/avatar-1.png',
          chat_link: '#',
          reschedule_link: '#',
          cancel_link: '#',
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

