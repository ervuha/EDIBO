<div class="form">
  <vaadin-text-field label="First Name" id="firstName"> </vaadin-text-field>
  <vaadin-text-field label="Last Name" id="lastName"> </vaadin-text-field>
  <vaadin-button id="addButton"> Add </vaadin-button>
</div>
<vaadin-grid id="grid">
  <vaadin-grid-column path="firstName" header="First name"> 
  </vaadin-grid-column>
  <vaadin-grid-column path="lastName" header="Last name">
  </vaadin-grid-column>
</vaadin-grid>