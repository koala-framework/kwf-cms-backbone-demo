<ul>
<% _.each(people, function(person) { %>
  <li><a href="#" data-id="<%=person.id%>"><%=person.firstname%> <%=person.lastname%></a></li>
<% }) %>
</ul>
