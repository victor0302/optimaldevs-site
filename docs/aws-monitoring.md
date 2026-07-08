# AWS cost & billing monitoring

How OptimalDevs watches AWS spend. Two independent safety nets guard against a
misconfiguration, a runaway resource, or a leaked credential quietly running up
the bill.

## 1. Monthly budget alert (slow-burn)

- A monthly AWS Budget with a $5 threshold, set up at account creation.
- Emails when actual or forecasted spend crosses the threshold.
- Catches gradual overspend (a forgotten resource accruing cost over days).

## 2. Cost Anomaly Detection (fast-spike)

- **Monitor:** the account-level "AWS services" monitor (managed by AWS, watches
  every service individually). Only one AWS-services monitor is allowed per
  account; AWS auto-creates it, so we reuse it rather than creating a duplicate.
- **Alert subscription:** individual alerts (immediate, per anomaly), $5 impact
  threshold, delivered to the founder's email.
- Catches sudden spikes (a spun-up expensive resource, a credential leak driving
  usage) within a day, not at month end.

Together: the budget catches slow drift, anomaly detection catches spikes.

## Gotcha: IAM access to Billing

Even a full-admin IAM user (e.g. `vic-admin`) cannot open Billing / Cost
Management or Cost Explorer until the **root** account enables it:

> Root user → Account settings → "IAM user and role access to Billing
> information" → Edit → check "Activate IAM Access" → Update.

Without this, Cost Explorer actions like `ce:GetCostAndUsage` return Access
Denied regardless of the IAM policy attached to the user.

## Free Plan cutoff

The account is on the AWS Free Plan ($100 credit, 6-month window from creation,
ends ~2026-11-27). Upgrade to the Paid Plan before the cutoff to avoid a forced
service interruption. A calendar reminder is set for ~2026-11-15.
