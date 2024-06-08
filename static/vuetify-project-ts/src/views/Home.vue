<template>
  <!-- Masthead -->
  <v-container>
    <!-- <UnderConstruction /> -->
    <v-container fluid class="d-flex flex-column align-center justify-space-around masthead">
      <v-img src="@/assets/EZLogo.svg" class="logo flex-grow-0" />
      <v-container class="text-center">
        <div class="text-h2 font-weight-bold mb-2">
          Ethan Zeigler
        </div>
        <div class="text-h4">
          Software Engineer
        </div>
        <v-icon size=40 icon="mdi-chevron-down" class="mt-5 wave-anim" />
      </v-container>
    </v-container>

    <!-- Skills -->
    <div id="skills">
      <div class="d-flex flex-column align-center mb-5">
        <h4 class="text-h4">Why Hire Me?</h4>
        <h5 class="text-subtitle-1">Because I am...</h5>
      </div>
      <div class="d-flex flex-row justify-center flex-wrap skill-container">
        <div v-for="(skill, index) in skillIcons" :key="index"
          class="d-flex flex-column align-center px-5 py-5 skill-icon">
          <v-avatar size="120" color="info" class="mb-3 mx-15">
            <v-icon size="70" :icon="skill.icon" />
          </v-avatar>
          <span class="text-h5 mb-1">
            {{ skill.title }}
          </span>
          <span class="text-subtitle-1">
            {{ skill.subtitle }}
          </span>
        </div>
      </div>
    </div>

    <v-divider style="margin-bottom: 5rem;"/>

    <!-- Projects -->
    <p>
      <div class="d-flex flex-column align-center my-5">
        <h4 class="text-h4">What am I up to?</h4>
        <h5 class="text-subtitle-1">Besides $2 bowling nights...</h5>
        <i><h5 class="text-subtitle-1 mt-5" style="text-align: center">
            This is a work in progress list. More things are to come!
        </h5></i>
      </div>
      <div class="d-flex flex-row flex-wrap justify-center">
        <v-hover v-for="(project, index) in projects" :key="index" v-slot="{ isHovering, props }">
          <v-card class="project-card mx-3 mt-5" v-bind="props">
            <div class="project-image-container d-flex flex-column">
              <v-img height=10rem content-class="project-image-container" v-if="project.imageUrl" :src="project.imageUrl"></v-img>
              <v-icon v-else-if="project.icon" size=10rem :icon="project.icon"></v-icon>
            </div>
            <v-card-text>
              <a :href="project.externalLink">
                <h2 class="text-h6 text-primary">{{ project.title }}</h2>
              </a>
              {{ project.description }}
            </v-card-text>

            <v-card-title>
              <!-- <v-rating :model-value="4" dense color="orange" background-color="orange" hover class="me-2"></v-rating> -->
              <!-- <span class="text-primary text-subtitle-2 float-right">64 Reviews</span> -->
            </v-card-title>

            <!-- <v-overlay :model-value="isHovering" contained scrim="#036358" class="align-center justify-center">
                <v-btn variant="flat">See more info</v-btn>
              </v-overlay> -->
          </v-card>
        </v-hover>
      </div>
    </p>
  </v-container>
</template>

<script lang="ts" setup>
import UnderConstruction from '@/components/common/UnderConstruction.vue'
// import { useHead } from '@vueuse/head';
type Project = {
  title: string,
  description: string,
  icon?: string,
  externalLink?: string,
  routerLink?: string,
  imageUrl?: string,
}

type SkillIcon = {
  title: string,
  subtitle: string,
  icon?: string,
}

const skillIcons: Array<SkillIcon> = [
  // {
  //   title: "Adept",
  //   subtitle: "Experienced in a wide variety of technology",
  //   icon: "mdi-pinwheel",
  // },
  {
    title: "Security Minded",
    subtitle: "Knowledgeable about and skilled at detecting vulnerabilities",
    icon: "mdi-security",
  },
  {
    title: "Enthusiastic",
    subtitle: "Driven to learn from experience and push for quality",
    icon: "mdi-fire",
  },
  {
    title: "User-focused",
    subtitle: "A stakeholder's experience is just as important as functionality",
    icon: "mdi-image-filter-center-focus-strong",
  },
  {
    title: "Vigilant",
    subtitle: "Live-monitoring is always part of a product MVP",
    icon: "mdi-telescope",
  }
]

const projects: Array<Project> = [
  {
    title: "Moonlight",
    externalLink: "https://github.com/kronos-project/moonlight",
    description: "A Wizard101 game traffic decoder designed to take unencrypted packet captures of KI traffic and turn them into something a human can understand",
    imageUrl: "https://edgecast.kingsisle.com/app/uploads/2018/09/WizardLogo_w_TM.png",
  },
  {
    title: "Advisor",
    externalLink: "https://github.com/EthanZeigler/Advisor",
    description: "Take your PAWS shopping cart and get a printout of all the schedules that can be made with them",
    imageUrl: "http://tcnj.pages.tcnj.edu/files/2014/06/tcnj-logo-type300.png"
  },
]

// useHead({
//       // Can be static or computed
//       title: "Ethan's Nook", // FIXME: needs to be dynamic
//       meta: [
//         {
//           name: `description`,
//           content: "Ethan Zeigler's personal portfolio website",
//         },
//       ],
//     })
</script>

<style scoped lang="scss">
.masthead {
  height: calc(100vh - 64px);
}

.logo {
  aspect-ratio: 1 / 1;
  height: 40vh;
}

.skill-icon {
  width: min-content;

  span {
    text-align: center;
  }
}

.skill-container {
  padding: 0 10% 0 10%;
}

.text-subtitle-1 {
  line-height: 1.3;
}

.project-card {
  display: flex;
  flex-direction: column;
  flex-basis: 20rem;

  .v-icon {
    align-self: center
  }

  .project-image-container {
    background: #F1F1F1;
    padding: 0.5rem 0;
    // i tried so many things and this plus
    // setting the height on the component is the
    // only one that worked
    img {
      object-fit: contain;
    }
  }
}

@keyframes upDown {
  to {
    transform: translatey(20px);
  }
}

.wave-anim {
  animation: upDown 1.5s alternate infinite ease-in-out;
}
</style>
