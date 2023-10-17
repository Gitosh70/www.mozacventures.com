document.addEventListener("DOMContentLoaded", function() {
    var auditLink = document.querySelector('a[href="#audit"]');
    var auditDropdown = document.getElementById("audit-dropdown");
  
    function showDropdown() {
      // Calculate the position of the link
      var linkRect = auditLink.getBoundingClientRect();
      var linkTop = linkRect.top + window.scrollY;
      var linkLeft = linkRect.left + window.scrollX;
  
      // Position the dropdown below the link
      auditDropdown.style.top = linkTop + auditLink.offsetHeight + "px";
      auditDropdown.style.left = linkLeft + "px";
  
      // Show the dropdown
      auditDropdown.style.display = "block";
    }
  
    function hideDropdown() {
      // Hide the dropdown
      auditDropdown.style.display = "none";
    }
  
    auditLink.addEventListener("click", function(event) {
      event.preventDefault();
      showDropdown();
    });
  
    document.addEventListener("click", function(event) {
      var targetElement = event.target;
  
      // Check if the clicked element is the audit link or the dropdown itself
      var isAuditLink = targetElement === auditLink || auditLink.contains(targetElement);
      var isDropdown = targetElement === auditDropdown || auditDropdown.contains(targetElement);
  
      if (!isAuditLink && !isDropdown) {
        // Clicked outside of the audit link and dropdown, so hide the dropdown
        hideDropdown();
      }
    });
  });
  