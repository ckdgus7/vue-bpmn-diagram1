<template>
  <div id="app" class="containers" ref="content">
    <div class="canvas" ref="canvas"></div>
    <div class="properties-panel-parent" id="js-properties-panel"></div>
  </div>
</template>

<script>
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js-properties-panel/dist/assets/properties-panel.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "./styles.css";
import Modeler from "bpmn-js/lib/Modeler";
import { xml } from "./constants";
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
} from "bpmn-js-properties-panel";
import ModdleDescriptor from "./BPMNService/PropertiesPanel/descriptors/descriptors.json";
import PropertiesProviderModule from "./BPMNService/PropertiesPanel/providers";

export default {
  name: "App",
  data: () => ({
    bpmnModeler: null,
    container: null,
    canvas: null,
    nombre: null,
    element: null,
  }),
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.container = this.$refs.content;
      const canvas = this.$refs.canvas;

      this.bpmnModeler = new Modeler({
        container: canvas,
        propertiesPanel: {
          parent: "#js-properties-panel",
        },
        additionalModules: [
          BpmnPropertiesPanelModule,
          BpmnPropertiesProviderModule,
          PropertiesProviderModule,
        ],
        moddleExtensions: {
          descriptors: ModdleDescriptor,
        },
      });

      this.createNewDiagram();
    },
    async createNewDiagram() {
      // Convierte la cadena en un gráfico y muéstralo
      try {
        const result = await this.bpmnModeler.importXML(xml);
        //this.addEventBusListener();
        //this.addBpmnListener();
        //const { warnings } = result;
        //console.log(warnings);
      } catch (err) {
        console.log(err.message, err.warnings);
      }
    },
  },
};
</script>
