export const xml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="8.9.1">
  <bpmn:process id="tradeError_1.0.0" name="Trade Error 1.0">
    <bpmn:startEvent id="startEvent_1.0.0" name="Start Event">
      <bpmn:outgoing>sequenceFlow_1.0.0</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="task_1.0.0" name="Task">
      <bpmn:outgoing>sequenceFlow_2.0.0</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="endEvent_1.0.0" name="End Event"/>
    <bpmn:sequenceFlow id="sequenceFlow_1.0.0" name="Seq1" sourceRef="startEvent_1.0.0" targetRef="task_1.0.0"/>
    <bpmn:sequenceFlow id="sequenceFlow_2.0.0" name="Seq2" sourceRef="task_1.0.0" targetRef="endEvent_1.0.0"/>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="tradeError_1.0.0_di" bpmnElement="tradeError_1.0.0">
      <bpmndi:BPMNShape id="startEvent_1.0.0_di" bpmnElement="startEvent_1.0.0">
        <dc:Bounds x="156" y="81" width="36" height="36"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="task_1.0.0_di" bpmnElement="task_1.0.0">
        <dc:Bounds x="250" y="59" width="100" height="80"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="endEvent_1.0.0_di" bpmnElement="endEvent_1.0.0">
        <dc:Bounds x="412" y="81" width="36" height="36"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="sequenceFlow_1.0.0_di" bpmnElement="sequenceFlow_1.0.0">
        <di:waypoint x="192" y="99"/>
        <di:waypoint x="250" y="99"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sequenceFlow_2.0.0_di" bpmnElement="sequenceFlow_2.0.0">
        <di:waypoint x="350" y="99"/>
        <di:waypoint x="412" y="99"/>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;
