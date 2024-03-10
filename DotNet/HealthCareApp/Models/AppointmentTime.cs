using System;
using System.Collections.Generic;

namespace HealthCareApp.Models;

public partial class AppointmentTime
{
    public int AppointId { get; set; }

    public int DocId { get; set; }

    public string SlotStart { get; set; } = null!;

    public string? SlotEnd { get; set; }

    public int? Flag { get; set; }

    public string Day { get; set; } = null!;

    public virtual Doctor Doc { get; set; } = null!;
}
