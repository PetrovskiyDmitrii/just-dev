<template>
  <div class="view-main">
    <ViewHeader />
    <h1 class="view-main__title">Lorem</h1>
    <input type="text" v-model="dataName">
    <button @click.prevent="getName">send</button>
    <button @click.prevent="resetAll">reset all</button>
    <br>
    <p></p>
    <button>Ctrl+Z</button>
    <div style="display:flex;width: 100%;">
      <div style="width: 50%;flex-shrink:0;">
        <h2 style="margin-top:50px;">Current state</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-if="getActiveState"
            >
              <td>{{ getActiveState.id }}</td>
              <td>{{ getActiveState.name }} </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="width: 50%;flex-shrink:0;">
        <h2 style="margin-top:50px;">History state</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody v-if="getNameList">
            <tr
              v-for="id in getCurrentState"
              :key="id"
            >
              <td  style="cursor: pointer" @click.prevent="moveToState(id)">{{ id }} |</td>
              <td>
                <span>
                  {{ getNameList.find(nameList => nameList.id == id).name }}; 
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ViewHeader from './Components/ViewHeader';

export default {
  name: 'App',
  components: {
    ViewHeader
  },
  data() {
    return {
      dataName: null,
    }
  },
  computed: mapGetters(['getActiveState', 'getCurrentState', 'getNameList']),
  methods: {
    ...mapActions(['update', 'getLastItem', 'moveToState', 'resetAll']),

    getName() {
      if (!this.dataName) return false;

      this.update({name: this.dataName})
      this.dataName = null;
    }
  },
  created() {
    this.getLastItem();
  },
}
</script>

<style lang="scss">
  .view-main {
    margin: 25px;

    &__title {
      font-size: 32px;
      text-align: center;
    }
  }
</style>
