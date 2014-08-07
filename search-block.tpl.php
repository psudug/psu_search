<form id="psu-search" name="psu-search-block" action="http://psu.edu/search/gss" method="get" onSubmit="return dosearch();">
  <label class="subtle">Search Options:</label>
  <input class="psu-search__engine" type="radio" name="engine" id="engine_gss" checked value="http://psu.edu/search/gss/">
    <label for="engine_gss">Penn State</label>
  <input class="psu-search__engine" type="radio" name="engine" id="engine_people" value="http://psu.edu/search/people/">
    <label for="engine_people">People</label>
  <input class="psu-search__engine" type="radio" name="engine" id="engine_department" value="http://psu.edu/search/department/">
    <label class="last-engine"for="engine_department">Department</label>

  <div class="psu-search__keywords">
    <label class="subtle" for="query">Search Text:</label>
    <input class="psu-search__input" type="text" name="query" placeholder="<?php print $placeholder; ?>">
    <input class="psu-search__submit" type="submit" name="search" value="Search">
  </div>
</form>
