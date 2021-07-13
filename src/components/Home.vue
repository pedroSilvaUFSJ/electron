<template>
  <v-container fluid>
    <div class="inputContainer notranslate">
      <div class="maxQtt">
        <span class="labelQtt">Max Quantity</span>
        <input
          class="inputQtt"
          placeholder="Max Quantity"
          type="number"
          v-model="maxQtt"
          @change="changeList"
        />
      </div>
      <v-form class="form">
        <v-file-input
          append-outer-icon="mdi-send"
          chips
          label="Select the subtitles"
          multiple
          outlined
          prepend-icon="mdi-message-text"
          v-model="files"
          @click:append-outer="processSubtitles"
        >
        </v-file-input>
      </v-form>
    </div>
    <div class="translateContainer">
    <v-google-translate class="translate" />
    </div>
    <div class="wordsContent">
      <div class="pills notranslate">
        <Pill
          v-for="(word, index) in list"
          :key="word.name"
          :name="word.name"
          :amount="word.amount"
          :length="list.length"
          :index="index"
        />
      </div>
      <div class="pills Translation">
        <Pill
          v-for="(word, index) in list"
          :key="word.name"
          :name="word.name"
          :amount="word.amount"
          :length="list.length"
          :index="index"
        />
      </div>
    </div>
  </v-container>
</template>

<script src="https://cdn.jsdelivr.net/npm/v-google-translate/lib/v-google-translate.umd.min.js"/>
<script>
import Pill from "./Pill";
import { ipcRenderer } from "electron";

export default {
  components: { Pill },
  data: () => {
    return {
      files: [],
      groupedWords: [],
      list: [],
      maxQtt: 75,
    };
  },
  methods: {
    processSubtitles() {
      const paths = this.files.map((f) => f.path);
      ipcRenderer.send("process", paths);
      ipcRenderer.on("process", (event, resp) => {
        this.groupedWords = resp;
        this.list = resp.slice(0, this.maxQtt);
      });
    },
    changeList() {
      this.list = this.groupedWords.slice(0, this.maxQtt);
    },
    googleTranslateSelectedHandler(language) {
      const { code, name, cname, ename } = language;
      // todo ...
    },
  },
};
</script>

<style scoped>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  border: 1px solid gray;
}
.wordsContent{
    display: flex;
    flex-direction: row;
}
.translateContainer{
    display: flex;
    justify-content: flex-end;
}
.inputContainer {
  display: flex;
}
.maxQtt {
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
}
.inputQtt {
  border: 1px solid grey;
  border-radius: 10px;
  padding-left: 5px;
}
.labelQtt {
  padding-left: 5px;
}
.form {
  width: 100%;
}
.translate {
  max-width: 300px;
}
</style>