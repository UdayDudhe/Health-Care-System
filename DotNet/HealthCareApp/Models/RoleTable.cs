using System;
using System.Collections.Generic;

namespace HealthCareApp.Models;

public partial class RoleTable
{
    public int Roleid { get; set; }

    public string Rolename { get; set; } = null!;

    public virtual ICollection<LoginTable> LoginTables { get; set; } = new List<LoginTable>();
}
