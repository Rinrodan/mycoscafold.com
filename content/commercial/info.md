---

Title: 'Commercial' # in any language you want

description: 'Commercial Services'
disableShare: true
layout: baseof
ShowReadingTime: false
showToc: false


---

    <!-- <div class="row">
        {% $residential := .Data.Residential %}
        {% $commercial := .Data.Commercial %}
        {% $industrial := .Data.Industrial %}
      
        <div id="{{$residential.Title}}" class="column column-residential">
          <h2>{{$residential.Title}}</h2>
          <img src="{{$residential.ImageURL}}"/>
          <p>{{$residential.Content}}</p>
        </div>
      
        <div id="{{$commercial.Title}}" class="column column-commercial">
          <h2>{{$commercial.Title}}</h2>
          <img src="{{$commercial.ImageURL}}"/>
          <p>{{$commercial.Content}}</p>
        </div>
      
        <div id="{{$industrial.Title}}" class="column column-industrial">
          <h2>{{$industrial.Title}}</h2>
          <img src="{{$industrial.ImageURL}}"/>
          <p>{{$industrial.Content}}</p>
        </div>
      </div>
</div>
</div>
{{ end }}
<script defer>
    document.addEventListener("DOMContentLoaded", function(event) {
      const residentialColumn = document.getElementById("residential");
      const commercialColumn = document.getElementById("commercial");
      const industrialColumn = document.getElementById("industrial");
  
      residentialColumn.addEventListener('click', () => { hideAllColumns(); showResidentialColumn(); });
      commercialColumn.addEventListener('click', () => { hideAllColumns(); showCommercialColumn(); });
      industrialColumn.addEventListener('click', () => { hideAllColumns(); showIndustrialColumn(); });
  
      function hideAllColumns() {
        residentialColumn.style.display = "none";
        commercialColumn.style.display = "none";
        industrialColumn.style.display = "none";
      }
  
      function showResidentialColumn() {
        residentialColumn.style.display = "block";
        commercialColumn.style.display = "none";
        industrialColumn.style.display = "none";
      }
      
      function showCommercialColumn() {
        residentialColumn.style.display = "none";
        commercialColumn.style.display = "block";
        industrialColumn.style.display = "none";
      }
  
      function showIndustrialColumn() {
        residentialColumn.style.display = "none";
        commercialColumn.style.display = "none";
        industrialColumn.style.display = "block";
      }
    });
  </script> -->