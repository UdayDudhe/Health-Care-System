using System;
using System.Collections.Generic;

namespace HealthCareApp.Models;

public partial class LoginTable
{
    public int LoginId { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int? RoleId { get; set; }

    public ulong IsApproved { get; set; }

    public virtual Doctor? Doctor { get; set; }

    public virtual ICollection<Patient> Patients { get; set; } = new List<Patient>();

    public virtual RoleTable? Role { get; set; }
}
